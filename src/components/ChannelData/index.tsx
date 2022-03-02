import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])


    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Felipe Oliveira"
                        date="05/09/2021"
                        content="Hoje é o meu aniversário!"
                    />
                ))}

                <ChannelMessage
                    author='Lincoln Diogo'
                    date='05/09/2021'
                    isBot
                    content={
                        <>
                            <Mention>@Felipe Oliveira</Mention>, me carrega no LOL e CS de novo por favor?
                        </>
                    }

                />
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Conversar em #chat-livre' />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;