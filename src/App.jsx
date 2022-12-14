import './App.scss'
import Blob from './components/Blob'
import Carousel from './components/Carousel/react-spring-carousel';
import FullPage from './components/FullPage/FullPage';
import Logo from './components/Logo';
import Modal from './components/Modal';
import PositionExample from './components/PositionExample';
import ProgressBar from './components/ProgressBar';
import Trail from './components/Trail';
import ZoomOut from './components/ZoomOut/ZoomOut';

function App() {

  return (
    <main className='h-[1000vh]'>
      {/* <Blob /> */}
      {/* <ProgressBar /> */}
      {/* <Logo /> */}
      {/* <Trail /> */}
      {/* <Modal /> */}

      {/* <PositionExample /> */}

      {/* <ZoomOut /> */}
      <Carousel />

      {/* <FullPage /> */}
    </main>
  )
}

export default App
