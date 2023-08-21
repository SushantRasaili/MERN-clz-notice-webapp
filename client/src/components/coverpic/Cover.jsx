import "./cover.css";

const Cover =(props) => {

return (
//     <div className="covpic" >
//     <h3 className="noticetopic">Notices</h3> 
// </div>
<div className="covpic" >
    <img src={props.covpic} alt="cover" className='covimg' />
    <h1 className="covertitle">{props.covtitle}</h1>
</div>
)


}

export default Cover;