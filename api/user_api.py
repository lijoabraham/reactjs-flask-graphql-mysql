from schema import schema

def all_users(limit):
    q = """
        query q {
            result:allUsers(sort: TIME_MODIFIED_DESC) {
                edges {
                    node {
                        id
                        name
                        address
                        phone  
                    } 
                }
            }
        }
    """
    return schema.execute(q).data

def get_user(id):
    result = schema.execute(
        """
            query getSingleUser($id: ID!) {
                result:singleUser(id: $id) {
                    id
                    name
                    address
                    phone
                }
            }
        """,
        variable_values={"id": id},
    )

    return result.data

def add_user(data):
    result = schema.execute(
        """
            mutation addUser($name: String!, $address: String!, $phone: String!) {
               result:addUser(name: $name, address :$address, phone: $phone) {
                    user {
                        name
                        address
                        phone
                    }
                    ok
                    message
                }
            }
        """,
        variable_values={"name": data['name'], "address": data['address'], "phone": data['phone']},
    )

    return result.data

def update_user(data):
    result = schema.execute(
        """
            mutation updateUser($id: ID!, $input: UserInput!){
               result:updateUser(id: $id, input: $input) {
                    user {
                        name
                        address
                        phone
                    }
                    ok
                    message
                }
            }
        """,
        variable_values={"id": data['id'], "input" : data},
    )

    return result.data

def delete_user(data):
    result = schema.execute(
        """
            mutation deleteUser($id: ID!){
               result:deleteUser(id: $id) {
                    ok
                    message
                }
            }
        """,
        variable_values={"id": data['id']},
    )

    return result.data
