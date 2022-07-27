import styled from "styled-components";

export const Container = styled.div
`
    position: absolute;
    left: 60px;
    width: 154px;
    height: 77px;
    border-radius: 12px;
    color: #fff;
    background-color: #daaaff;
    text-align: left;
    padding: 11px;
    overflow: hidden;

    animation: showOnPageCard 0.70s linear forwards;
    opacity: 0;
    top: 50px;


    small{
        font-size:13px;
    }

    div {
        display: flex;
        align-items: center;

        span{
            font-size: 25px;
            font-weight: 400;
            margin-right: 5px;
        }
    }
    
    i{
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 50px;

        &.circle1{
            left: 105px;
            top: -20px;
            background: linear-gradient(0deg, 
                rgba(255, 255, 255, 0.3), 
                rgba(255, 255, 255, 0.3)
            );
        }
        &.circle2{
            left: 81px;
            bottom: -50px;
            background: linear-gradient(0deg, 
                rgba(255, 255, 255, 0.3), 
                rgba(255, 255, 255, 0.3)
            );
            transform: rotate(45deg);
        }
        &.circle3{
            left: 47px;
            top: -54px;
            transform: rotate(-72.7deg);
            border: 1px solid rgba(255, 255, 255, 0.5);
            transform: rotate(-72deg);
        }
     }


    @keyframes showOnPageCard{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
            top: 120px;
        }
    }
`