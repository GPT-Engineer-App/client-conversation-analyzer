import { useState, useEffect } from "react";
import { Container, VStack, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("calorieRecords")) || [];
    setRecords(storedRecords);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {records.map((record, index) => (
          <VStack key={index} spacing={2} border="1px" borderColor="gray.200" p={4} borderRadius="md" width="100%">
            <Text fontSize="lg">{record.date}</Text>
            <Text fontSize="lg">{record.title}</Text>
            <Text fontSize="lg">{record.calories} Calories</Text>
            {record.image && <Image src={record.image} alt={record.title} boxSize="100px" />}
            <Button colorScheme="blue" onClick={() => navigate(`/edit/${index}`)}>Edit</Button>
          </VStack>
        ))}
      </VStack>
    </Container>
  );
};

export default History;