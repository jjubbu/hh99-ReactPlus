import React from "react";
import { Grid, Text, Button } from "../elements";


const Header = () => {


    return (
        <React.Fragment>
            <Grid is_flex padding="0 16px">
                <Grid>
                    <Text margin="0" size="40px">헬로</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="회원가입" _onClick={()=>{}}></Button>
                    <Button text="로그인" _onClick={()=>{}}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Header.defaultProps = {

}

export default Header;