import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer, Link,Badge,
        }  from   '@chakra-ui/react' ;

import { ExternalLinkIcon } from '@chakra-ui/icons';    

import React from 'react';

const CourseCard = ({ course }) => {   
	return (


		<TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>title</Th>
        <Th>semestre</Th>
        <Th >course</Th>
        <Th >exrecice</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{course.title} {` `}  {course.courseIsNew && (
					<Badge ml='2' colorScheme='purple'>
						new
					</Badge>
				)}
        </Td>
        <Td>{course.semestre}</Td>
        <Td > <Link href={course.course} isExternal>
  cours <ExternalLinkIcon mx='2px' />
</Link>
        </Td>
        <Td>      <Link href={course.exercice} isExternal>
  exercice     <ExternalLinkIcon mx='2px' />
      </Link>  
      </Td>
      </Tr> 
    </Tbody>
  </Table>
</TableContainer>

	);
};

export default CourseCard;
