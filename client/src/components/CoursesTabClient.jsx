import {
	Box,
	TableContainer,
	Th,
	Tr,
	Table,
	Td,
	Thead,
	Tbody,
          Link,Badge,
	
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; 

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../redux/actions/courseActions';


const CoursesTabClient  = () => {
	
          const dispatch = useDispatch();
	const { loading, error, courses, pagination } = useSelector((state) => state.course);

	useEffect(() => {
		dispatch(getCourses());
	}, [dispatch]);
	

	return (
                    <>
		<Box>
			
			
				<Box>
					<TableContainer>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>title </Th>
									<Th>semserte</Th>
									<Th>courses</Th>
									<Th>exercise </Th>
									<Th>New OR not </Th>
								</Tr>
							</Thead>
							<Tbody>
								
                                                                      {courses.map((course) => (
										<Tr key={course._id}>
											<Td> {course.title}   </Td>
											<Td>  {course.semestre} </Td>
											<Td> <Link href={course.course} isExternal>
                                                                                                              cours <ExternalLinkIcon mx='2px' />
                                                                                                              </Link> 
                                                                                                              </Td>
											<Td>  <Link href={course.exercice} isExternal>
                                                                                                             exercice     <ExternalLinkIcon mx='2px' />
                                                                                                              </Link> </Td>
											<Td> {course.courseIsNew && (
					<Badge ml='2' colorScheme='purple'>
						new
					</Badge>
				)}   </Td>
										</Tr>
                                                                                                    ))}
								
							</Tbody>
						</Table>
					</TableContainer>
					
				</Box>
			
		</Box>
                    </>
	);
};

export default CoursesTabClient;
