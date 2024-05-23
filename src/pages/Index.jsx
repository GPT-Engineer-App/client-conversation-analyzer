import { useState, useEffect } from "react";
import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [dailyCalories, setDailyCalories] = useState(150);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const storedCalories = localStorage.getItem("totalCalories");
    if (storedCalories) {
      setTotalCalories(parseInt(storedCalories, 10));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalCalories((prev) => {
        const newTotal = prev + dailyCalories;
        localStorage.setItem("totalCalories", newTotal);
        return newTotal;
      });
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, [dailyCalories]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Daily Calorie Credit: {dailyCalories}</Text>
        <Text fontSize="2xl">Total Calories: {totalCalories}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/add")}>Add Calorie Record</Button>
        <Button colorScheme="blue" onClick={() => navigate("/history")}>View History</Button>
      </VStack>
    </Container>
  );
};

export default Index;