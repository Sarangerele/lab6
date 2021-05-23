import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-12">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <div className="ml-auto">
                      <Link
                        to={`/edit/${user.id}`}
                        color="warning"
                        className="btn btn-warning mr-1"
                      >
                        Өөрчлөх
                      </Link>
                      <Button
                        onClick={() => removeUser(user.id)}
                        color="danger"
                      >
                        Устгах
                      </Button>
                    </div>
                  </tr>
                </tbody>
              </Table>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center"></h4>
      )}
    </ListGroup>
  );
};
