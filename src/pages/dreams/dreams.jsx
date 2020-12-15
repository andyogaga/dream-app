import React from "react";
import { Table, TableCell, Container } from "./styles";
import { removeDream, getDreams } from "../../utils/helper";
import { arrayOf, shape, string, func, number } from "prop-types";
import Delete from "../../assets/icons/trash.png";
import Pagination from "../../components/pagination.component";

const DreamsComponent = ({ dreams, setDreams, page, setPage, customRef }) => {
  return (
    <Container ref={customRef}>
      {!!dreams.length && (
        <>
          <Table style={{ width: "100%", marginTop: "4rem" }}>
            <thead>
              <tr>
                <TableCell>Dream</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </tr>
            </thead>

            {dreams.map((dream) => {
              return (
                <tbody key={`dream-${dream.id}`}>
                  <tr>
                    <TableCell data-testid={`dream-${dream.id}`}>
                      {dream.dream}
                    </TableCell>
                    <TableCell data-testid={`dream-name-${dream.firstname}`}>
                      {dream.firstName}
                    </TableCell>
                    <TableCell >
                      <button
                        onClick={() => {
                          removeDream(dream.id);
                          setDreams(getDreams());
                        }}
                        data-testid={`dream-delete-${dream.id}`}
                      >
                        <img src={Delete} alt="Delete" />
                      </button>
                    </TableCell>
                  </tr>
                </tbody>
              );
            })}
          </Table>
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </Container>
  );
};

DreamsComponent.propTypes = {
  dreams: arrayOf(
    shape({
      id: string,
      dream: string,
      firstName: string,
    })
  ),
  setDreams: func,
  page: number,
};

export default DreamsComponent;
