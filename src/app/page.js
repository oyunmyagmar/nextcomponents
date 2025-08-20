import { Box, Card, Round } from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Box color="red" isBox={true}></Box>
      <Round></Round>
      <Box color="blue"></Box>
      <Box color="green" isBox={true}></Box>
      <Round></Round>
      <Box title="box1"></Box>
      <Box color="gray" isBox={true}></Box>
      <Card image="https://www.seavees.com/cdn/shop/files/Womens_Cardinal_Sneaker_Latte-WCCSC23NSP_LAT_Side.jpg?v=1688074605"></Card>
    </div>
  );
};
export default Home;
