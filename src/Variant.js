import { tv } from "tailwind-variants";
 
const Variant=()=>{

    const button = tv({
        base: "font-semibold text-white text-sm py-1 px-4 rounded-full active:opacity-80",
        variants: {
          color: {
            primary: "bg-blue-500 hover:bg-blue-700",
            secondary: "bg-purple-500 hover:bg-purple-700",
            success: "bg-green-500 hover:bg-green-700",
          },
          disabled: {
            true: "opacity-50 bg-gray-500 pointer-events-none",
          },
                
        },
      },{
        responsiveVariants: ['sm', 'md'] // `true` to apply to all screen sizes
      });

return(
    <>
    {button({ color: "secondary" })};
    </>
)      

}
 
export default Variant

