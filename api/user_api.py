from schema import schema

def all_users(limit):
    q = """
        query q {
            result:allUsers {
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