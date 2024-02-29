import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Spinner,
	Stack,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	Wrap,
	useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, resetCourseError } from '../redux/actions/courseActions';
import CourseTableItem from './CourseTableItem';
import AddNewProduct from './AddNewCourse';

const CoursesTab = () => {
	const dispatch = useDispatch();
	const { error, loading } = useSelector((state) => state.admin);
	const { courses, courseUpdate } = useSelector((state) => state.course);
	const toast = useToast();

	useEffect(() => {
		dispatch(getCourses());
		dispatch(resetCourseError());

		if (courseUpdate) {
			toast({
				description: 'Product has been updated.',
				status: 'success',
				isClosable: true,
			});
		}
	}, [dispatch, toast, courseUpdate]);

	return (
		<Box>
			{error && (
				<Alert status='error'>
					<AlertIcon />
					<AlertTitle>Upps!</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{loading ? (
				<Wrap justify='center'>
					<Stack direction='row' spacing='4'>
						<Spinner mt='20' thickness='2px' speed='0.65s' emptyColor='gray.200' color='cyan.500' size='xl' />
					</Stack>
				</Wrap>
			) : (
				<Box><Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex='1' textAlign='right'>
								<Box>
									<Text mr='8px' fontWeight='bold'>
										Add a new Product
									</Text>
								</Box>
							</Box>
						</AccordionButton>
					</h2>
					<AccordionPanel pb='4'>
						<Table>
							<AddNewProduct />
						</Table>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
					
					<Table variant='simple' size='lg'>
						<Thead>
							<Tr>
								<Th>semestre</Th>
								<Th>title</Th>
								<Th>courses</Th>
								<Th>exercecies</Th>
								<Th> new Badge</Th>
							</Tr>
						</Thead>
						<Tbody>
							{courses.length > 0 &&
								courses.map((course) => <CourseTableItem key={course._id} course={course} />)}
						</Tbody>
					</Table>
				</Box>
			)}
		</Box>
	);
};

export default CoursesTab;
