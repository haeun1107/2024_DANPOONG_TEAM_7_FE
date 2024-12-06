import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReviewProvider } from './contexts/ReviewContext';
import { EditProvider } from './contexts/EditContext';

//Layout
import AnimatedLayout from './components/layout/AnimatedLayout';
import LoadingSpinner from './components/layout/LoadingSpinner';
import BackLayout from './components/layout/BackLayout';
import Layout from './components/layout/Layout';

//Login
import ProtectedRoute from './components/login/ProtectedRoute';
import KakaoLoginButton from './pages/login/KakaoLoginButton';
import KakaoCallback from "./pages/login/KakaoCallback";
import SelectAge from './pages/login/SelectAge';
import ConfirmAge from './pages/login/ConfirmAge';

//Page
import EnterpriseSearch from './pages/enterprise/EnterpriseSearch';
import Magazine from './pages/magazine/Magazine';
import Home from './pages/home/Home';
import Program from './pages/program/Program';
import Mypage from './pages/mypage/Mypage';
import EnterpriseInfo from './pages/enterprise/EnterpriseInfo';
import MagazineDetail from './pages/magazine/MagazineDetail';
import Review from './pages/mypage/review/Review';
import ReviewKeyword from './pages/mypage/review/ReviewKeyword';
import ReviewWrite from './pages/mypage/review/ReviewWrite';
import EditKeyword from './pages/mypage/review/EditKeyword';
import EditWrite from './pages/mypage/review/EditWrite';

function App() {
  return (
    <BrowserRouter>
      <ReviewProvider>
        <EditProvider>
          <AnimatedLayout>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<KakaoLoginButton />} />                
                <Route path="/api/kakao/callback" element={<KakaoCallback />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/magazine/:id" element={<MagazineDetail />}/>
                  <Route path='/age' element={<SelectAge/>}/>  
                  <Route element={<Layout/>}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/magazine" element={<Magazine />}/>
                    <Route path="/enterprise" element={<EnterpriseSearch />}/>
                    <Route path="/program" element={<Program />}/>
                    <Route path="/mypage" element={<Mypage />}/>
                    <Route path="/enterprise/info/:enterpriseId" element={<EnterpriseInfo />} />
                    <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
                  </Route>
                  
                  <Route element={<BackLayout/>}>
                    <Route path='/age/confirm' element={<ConfirmAge/>}/>  
                    <Route path='/mypage/review/write' element={<ReviewWrite/>}/>  
                    <Route path='/mypage/review/editwrite' element={<EditWrite/>}/>  
                  </Route>
                  
                  <Route path="/mypage/review" element={<Review />}/>
                  <Route path='/mypage/review/editkeyword' element={<EditKeyword/>}/> 
                  <Route path='/mypage/review/keyword' element={<ReviewKeyword/>}/> 
                </Route>
            </Routes>
          </AnimatedLayout>
        </EditProvider>
      </ReviewProvider>
    </BrowserRouter>
  );
}

export default App;