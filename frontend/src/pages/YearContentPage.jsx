import { useParams } from 'react-router-dom';

export default function YearContentPage() {
  const { year } = useParams();
  return (
    <div>
      <h2>{year} A/L Chemistry</h2>
      <div className="mt-3">
        <h5>Subjects:</h5>
        <ul>
          <li>General Chemistry</li>
          <li>Organic Chemistry</li>
          <li>Inorganic Chemistry</li>
          <li>Physical Chemistry</li>
        </ul>
      </div>
    </div>
  );
}