import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </nav>
  );
}