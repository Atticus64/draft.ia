
export function Button({ children, onClick }){
  return (
    <button onClick={onClick} className="hover:bg-blue-400 hover:p-5 transition-all p-3 bg-blue-200">
      <b>{children}</b>
    </button>
  )
}