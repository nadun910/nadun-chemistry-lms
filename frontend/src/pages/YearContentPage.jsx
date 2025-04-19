import { useParams } from 'react-router-dom';

export default function YearContentPage() {
  const { year } = useParams(); // Gets the year from URL

  return (
    <div className="container mt-4">
      <h2>{year} A/L Chemistry</h2>
      
      <div className="mt-3">
        <h5>Subjects:</h5>
        <ul className="list-group">
          <li className="list-group-item">General Chemistry</li>
          <li className="list-group-item">Organic Chemistry</li>
          <li className="list-group-item">Inorganic Chemistry</li>
          <li className="list-group-item">Physical Chemistry</li>
        </ul>
      </div>
    </div>
  );
}