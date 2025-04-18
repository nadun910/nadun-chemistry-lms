import { useParams } from 'react-router-dom';

export default function YearContentPage() {
  const { year } = useParams();
  return (
    <div>
      <h2>{year} A/L Chemistry Content</h2>
      <p>Coming soon!</p>
    </div>
  );
}