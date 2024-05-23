import { useState, useEffect } from "react";
import { Container, Input, Button, VStack, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("calorieRecords")) || [];
    const record = storedRecords[id];
    if (record) {
      setTitle(record.title);
      setCalories(record.calories);
      setImage(record.image);
    }
  }, [id]);

  const handleSave = () => {
    const storedRecords = JSON.parse(localStorage.getItem("calorieRecords")) || [];
    storedRecords[id] = {
      title,
      calories: parseInt(calories, 10),
      image,
      date: new Date().toLocaleDateString(),
    };
    localStorage.setItem("calorieRecords", JSON.stringify(storedRecords));
    navigate("/history");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <Input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        <Button colorScheme="teal" onClick={handleSave}>Save</Button>
      </VStack>
    </Container>
  );
};

export default EditRecord;