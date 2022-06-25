import { Card } from "@mui/material";
interface InfoCardProps {
  message: string;
}
const InfoCard = ({ message }: InfoCardProps) => {
  return (
    <Card
      variant="elevation"
      sx={{
        padding: 4,
      }}
    >
      {message}
    </Card>
  );
};

export { InfoCard };
