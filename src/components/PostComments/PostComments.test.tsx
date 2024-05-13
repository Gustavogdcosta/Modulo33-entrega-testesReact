import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentários', ()=> {
        const {debug} = render(<PostComment />);
        fireEvent.change(screen.getByTestId('comment-box'), {target: { value: 'Adicionado o primeiro comentário'}});
        fireEvent.click(screen.getByTestId('comment-button'));
        fireEvent.change(screen.getByTestId('comment-box'), {target: { value: 'Adicionado o segundo comentário'}});
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-li')).toHaveLength(2);
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
    });
});