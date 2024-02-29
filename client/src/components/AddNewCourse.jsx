import { Tr, Td, Button, VStack, Input, FormControl, Switch, FormLabel, Text, Badge, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadCourse } from '../redux/actions/adminActions';

const AddNewCourse = () => {
    const dispatch = useDispatch();
    const [semestre, setSemestre] = useState('');
    const [course, setCourse] = useState('');
    const [title, setTitle] = useState('');
    const [exercice, setExercice] = useState('');
    const [courseIsNew, setCourseIsNew] = useState(false);

    const createNewCourse = () => {
        dispatch(uploadCourse({
            semestre,
            title,
            course, 
            exercice,
            courseIsNew,
        }));
    };

    return (
        <Tr>
            <Td>
                <FormControl>
                    <Input size='sm' value={semestre} onChange={(e) => setSemestre(e.target.value)} />
                </FormControl>
            </Td>
            <Td>
                <FormControl>
                    <Input size='sm' value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormControl>
            </Td>
            <Td>
                <FormControl>
                    <Input size='sm' value={course} onChange={(e) => setCourse(e.target.value)} />
                </FormControl>
            </Td>
            <Td>
                <FormControl>
                    <Input size='sm' value={exercice} onChange={(e) => setExercice(e.target.value)} />
                </FormControl>
            </Td>
            <Td>
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
            </Td>
            <Td>
                <VStack>
                    <Button variant='outline' w='160px' colorScheme='cyan' onClick={createNewCourse}>
                        <Text ml='2'>Save Course</Text>
                    </Button>
                </VStack>
            </Td>
        </Tr>
    );
};

export default AddNewCourse;
