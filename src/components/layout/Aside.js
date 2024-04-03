//import area





//function area
export default function Aside(props){
    return (
    <aside className={`col-2 ${props.param} tbdr h-100`}>{props.children}</aside>);
}
