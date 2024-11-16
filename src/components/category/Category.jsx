import { useNavigate } from "react-router-dom";

const category = [
    {
        image:'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name:'Fashion'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name:'Shirt'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name:'Jacket'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name:'Mobile'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name:'Laptop'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name:'Shoes'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name:'Home'
    },
    // {
    //     image:'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
    //     name:'Books'
    // },
];

const Category = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex">
                        {category.map((item, i) => (
                            <div key={i} className="px-3 lg:px-10">
                                <div
                                    onClick={() => navigate(`/category/${item.name}`)}
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1"
                                >
                                    <div className="flex justify-center mb-12">
                                        <img src={item.image} alt="img" />
                                    </div>
                                </div>
                                <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                                    {item.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
