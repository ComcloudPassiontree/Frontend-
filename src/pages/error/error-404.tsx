import Header from "../../ui/components/header/header"
import SecondaryHeader from "../../ui/components/header/secondary-header"
import Image404 from "../../assets/images/404.png"
import H1 from "../../ui/components/typography/headings/h1"
import Paragraph1 from "../../ui/components/typography/paragraphs/p1"
import Button from "../../ui/components/button/button"

function Error404() {
    return (
        <div className="fade-in">
            <Header />
            <SecondaryHeader />
            <div className="flex items-center justify-center flex-col mt-[50px] gap-5 w-[90%] max-w-[600px] mx-auto fade-in-up">
                <img src={Image404} alt="Error 404" className="md:h-[310px]"/>
                <H1 bold className="-mt-8">Error</H1>
                <Paragraph1 className="text-center">Oops! The page you're looking for doesn't exist. This might be due to a poor internet connection or server issues. Please try again later.</Paragraph1>
                <Button to="/employee/dashboard">RETURN TO DASHBOARD</Button>
            </div>
        </div>
    )
}

export default Error404

