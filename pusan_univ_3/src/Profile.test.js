import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="duruops" name="강두루" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="duruops" name="두루" />);
    utils.getByText('duruops'); // duru 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(두루)'); // (두루) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/두/); // 정규식 /두/ 을 통과하는 엘리먼트가 있는지 확인
  });
});