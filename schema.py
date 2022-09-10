# flask_sqlalchemy/schema.py
from email import message
import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from models.user import  User as UserModel
from dao.user_dao import UserDAO
from db import db_session
from graphql import GraphQLError

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
    id = graphene.ID()
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
    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserSchema)
    message = graphene.String()

    def mutate(self, info, name, address, phone):
        user, ok, message = UserDAO.add_user(name, address, phone)
        return AddUser(user=user, ok=ok, message=message)

class DeleteUser(graphene.Mutation):
    ok = graphene.Boolean()
    message = graphene.String()

    class Arguments:
        id = graphene.ID()

    @classmethod
    def mutate(cls, root, info, id):
        ok,message = UserDAO.delete_user(id)
        return cls(ok=ok, message=message)
            

class UpdateUser(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.ID()
        input = UserInput(required=True)
    user = graphene.Field(lambda: UserSchema)
    message = graphene.String()

    @classmethod
    def mutate(cls, root, info, id, input=None):
        user, ok, message = UserDAO.update_user(id, input)
        return cls(user=user, ok=ok, message=message)

   
class Mutation(graphene.ObjectType):
    add_user = AddUser.Field()
    delete_user = DeleteUser.Field()
    update_user = UpdateUser.Field()

schema = graphene.Schema(query=Query, mutation= Mutation)
