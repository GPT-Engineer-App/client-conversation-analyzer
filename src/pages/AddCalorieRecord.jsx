import { useState } from "react";
import { Container, Input, Button, VStack, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddCalorieRecord = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    const record = {
      title,
      calories: parseInt(calories, 10),
      image,
      date: new Date().toLocaleDateString(),
    };

    const storedRecords = JSON.parse(localStorage.getItem("calorieRecords")) || [];
    storedRecords.push(record);
    localStorage.setItem("calorieRecords", JSON.stringify(storedRecords));

    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <Input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddCalorieRecord;