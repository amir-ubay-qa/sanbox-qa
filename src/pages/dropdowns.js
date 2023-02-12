import Container from "./components/container"

export default function Dropdowns() {
   return (
      <>
         <Container title="UI Elements: Dropdown Buttons" height="h-80">
            <div className="dropdown">
               <label tabIndex={0} className="btn m-1">Click</label>
               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
               </ul>
            </div>
         </Container>
      </>
   )
}