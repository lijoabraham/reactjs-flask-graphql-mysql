# flask_sqlalchemy/schema.py
import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from models.user import  User as UserModel
from dao.user_dao import UserDAO
from db import db_session
from sqlalchemy import update

class CustomNode(graphene.Node):
    class Meta:
        name = 'MyNode'

    @staticmethod
    def to_global_id(type, id):
        return id

class UserSchema(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (CustomNode, )


class UserInput(graphene.InputObjectType):
    id = graphene.Int()
    name = graphene.String()
    address = graphene.String()
    phone = graphene.String()

class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_users = SQLAlchemyConnectionField(UserSchema.connection)
    single_user = graphene.Field(UserSchema, id=graphene.ID(required=True))

    def resolve_single_user(root, info, id):
       return UserDAO.get_user_by_id(id)


class AddUser(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        address = graphene.String(required=True)
        phone = graphene.String(required=True)
    user = graphene.Field(lambda: UserSchema)

    def mutate(self, info, name, address, phone):
        user = UserModel(
            name= name,
            address=address,
            phone=phone
        )

        db_session.add(user)
        db_session.commit()

        return AddUser(user=user)

class DeleteUser(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID()

    @classmethod
    def mutate(cls, root, info, id):
        obj = UserModel.query.filter_by(id=id).one()
        db_session.delete(obj)
        db_session.commit()
        return cls(ok=True)

class UpdateUser(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID()
        input = UserInput(required=True)
    user = graphene.Field(lambda: UserSchema)

    @classmethod
    def mutate(cls, root, info, id, input=None):
        u = update(UserModel)
        if input.name is not None:
            u = u.values({"name": input.name})
        if input.address is not None:
            u = u.values({"address": input.address})
        if input.phone is not None:
            u = u.values({"phone": input.phone})

        u = u.where(UserModel.id == id)
        db_session.execute(u)
        db_session.commit()
        return cls(ok=True)


   
class Mutation(graphene.ObjectType):
    mutate_user = AddUser.Field()
    delete_user = DeleteUser.Field()
    update_user = UpdateUser.Field()

schema = graphene.Schema(query=Query, mutation= Mutation)
