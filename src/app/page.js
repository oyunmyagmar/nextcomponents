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
      <Card image="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6040adb7-d8f8-40a2-ad17-d0c52c6971c1/NIKE+C1TY.png"></Card>
    </div>
  );
};
export default Home;
