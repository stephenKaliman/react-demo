import Challenge from "../components/Challenge";

function Challenges()
{
    return(
        <div>
            <h1>Challenges</h1>
            {/* custom tags have to be capitalized */}
            <Challenge number="1 :)"/>
            <Challenge number="2 :0"/>
            <Challenge number="3 :D"/>
        </div>
    );
}

export default Challenges;