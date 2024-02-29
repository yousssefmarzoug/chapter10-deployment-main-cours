import { DeleteIcon } from '@chakra-ui/icons';
import {
	Badge,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Switch,
	Td,
	Tr,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteCourse, updateCourse } from '../redux/actions/adminActions';
import ConfirmRemovalAlert from './ConfirmRemovalAlert';

const CourseTableItem = ({course}) => {
	const cancelRef = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [semestre, setSemestre] = useState(course.semestre);
          const [coursee, setCoursee] = useState(course.course);
          const [title, setTitle] = useState(course.title);
	const [courseIsNew, setCourseIsNew] = useState(course.courseIsNew);
          const [exercice, setExercice] = useState(course.exercice);
	
	const dispatch = useDispatch();

	const onSaveCourse = () => {
		dispatch(
			updateCourse(
				semestre,
                                        title,
				course._id,
                                        coursee,
				exercice,	
				courseIsNew,
			)
		);
	};

	const openDeleteConfirmBox = () => {
		onOpen();
	};

	return (
		<>
			<Tr>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={semestre} onChange={(e) => setSemestre(e.target.value)} />
						
					</Flex>
				</Td>
				
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={title} onChange={(e) => setTitle(e.target.value)} />
						
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={coursee} onChange={(e) => setCoursee(e.target.value)} />
						
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={exercice} onChange={(e) => setExercice(e.target.value)} />
						
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						
						<FormControl display='flex' alignItems='center'>
							<FormLabel htmlFor='courseIsNewFlag' mb='0' fontSize='sm'>
								Enable
								<Badge rounded='full' px='1' mx='1' fontSize='0.8em' colorScheme='green'>
									New
								</Badge>
								badge ?
							</FormLabel>
							<Switch id='courseIsNewFlag' onChange={() => setCourseIsNew(!courseIsNew)} isChecked={courseIsNew} />
						</FormControl>
					</Flex>
				</Td>
				<Td>
					<VStack>
						<Button colorScheme='red' w='160px' variant='outline' onClick={openDeleteConfirmBox}>
							<DeleteIcon mr='5px' />
							Remove Course
						</Button>
						<Button colorScheme='green' w='160px' variant='outline' onClick={onSaveCourse}>
							<MdOutlineDataSaverOn style={{ marginRight: '5px' }} />
							Save Changes
						</Button>
					</VStack>
				</Td>
			</Tr>
			<ConfirmRemovalAlert
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				cancelRef={cancelRef}
				itemToDelete={course}
				deleteAction={deleteCourse}
			/>
		</>
	);
};

export default CourseTableItem;
