
export function Button({ children, ...props }){
  return (
		<button 
      {...props}
			className={`mt-4 transition-all p-3 font-bold ${props.className}`}>
			{children}
		</button>
	)
}
