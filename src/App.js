
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Catalog from './components/catalog';
import { Routes, Route, Navigate} from 'react-router-dom';


function App() {
//   const dispatch = useDispatch()


//   const alert =  useSelector(
// 		state => state.AlertReducer
// 	)
//   if(alert.state){
//     closeAlert()
//   }
//   function closeAlert(){
//     setTimeout(function(){
//     	dispatch({
//         type: types.CLOSE_ALERT,
//         payload:{}
          
// })
//     },2500);

//   }
// 	const data = useSelector(
// 		state => state.userLogin
// 	)



//   if(data.accessToken && !data.userInfo){
//     dispatch(getNewAccessToken())

//   }

  return (
    <>
    


{/* {alert.state &&  (
				
				<div className={'alert '+ alert.type}>
					{alert.type === 'error'&& <strong>Ошибка!</strong> }
					
					{alert.text }
					<div className='close-alert' onClick={()=>[
            	dispatch({
						type: types.CLOSE_ALERT,
						payload:{}
							
		})
    
    ]}>
              <img src={require("./static-img/svg/close-svgrepo-com.svg").default} alt="" srcset="" />
    </div>
					
				</div>
			) }


 */}


<Header/>

<Routes>

  <Route path="/" element = {   <Home/>} />
  <Route path="/catalog" element = {   <Catalog/>} />
    
   </Routes>


    </>
  );
}

export default App;
