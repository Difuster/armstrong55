import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Plates from '../pages/Ceiling/Plates';
import Metal from '../pages/Ceiling/Metal';
import Slat from '../pages/Ceiling/Slat';
import Grid from '../pages/Ceiling/Grid';
import CeilingItem from '../pages/CeilingItem/CeilingItem';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/plates" element={<Plates />} />
      <Route path="plates/:title" element={<CeilingItem />} />
      <Route exact path="/metal" element={<Metal />} />
      <Route path="metal/:title" element={<CeilingItem />} />
      <Route exact path="/slat" element={<Slat />} />
      <Route path="slat/:title" element={<CeilingItem />} />
      <Route exact path="/grid" element={<Grid />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
