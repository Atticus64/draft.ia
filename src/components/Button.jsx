
export function Button({ children, ...props }){
  return (
		<button 
      {...props}
			className={`m-4 hover:bg-blue-400 transition-all p-3 bg-blue-200 font-bold ${props.className}`}>
			{children}
		</button>
	)
}
