
import '../style/Result.css'

function Result({winner , reset}) {
  return (
    <div className='result' >
     {winner==='CIRCLE' && 'Circle won the game.'} 
     {winner==='CROSS' && 'Cross won the game.'} 
     {winner==='It is a tie!' && 'It is a tie!'} 

     <button onClick={reset} className="btn">Reset</button>
    </div>
  );
}

export default Result;
