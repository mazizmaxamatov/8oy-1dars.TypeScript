import './App.css'

function App() {


  let name: string = "Muxammadazizjon";
  console.log("Name:", name);


  let age: number = 9;
  let newAge: number = age + 10;
  console.log("New Age:", newAge);


  let bir: boolean = true;
  console.log("Siz dasturchimsiz?", bir);


  let meva: string[] = ["Olma", "Banan", "Kivi"];
  console.log("mevalar:", meva);


  let ikki: { name: string, age: number, isStudent: boolean } = {
    name: "Muxammadazizjon",
    age: 19,
    isStudent: false
  };
  console.log("Person Object:", ikki);



  return (
    <>

      <p>Name: {name}</p>
      <p>Yosh: {newAge}</p>
      <p>Siz dasturchimsiz? {bir}</p>
      <p>Yaxshi korgan mevalarim: {meva}</p>
      
    </>
  )
}

export default App
