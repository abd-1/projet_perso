import React, { useState } from 'react';
import styled from 'styled-components';
import aide from '../../../../../../../../assets/aide.png';
import bold from '../../../../../../../../assets/bold.png';
import bntimg from '../../../../../../../../assets/bntimg.png';
import code from '../../../../../../../../assets/code.png';
import icon from '../../../../../../../../assets/icon.png';
import italic from '../../../../../../../../assets/italic.png';
import liste from '../../../../../../../../assets/liste.png';
import listeN from '../../../../../../../../assets/listeN.png';
import quote from '../../../../../../../../assets/quote.png';
import spoil from '../../../../../../../../assets/spoil.png';
import underline from '../../../../../../../../assets/underline.png';

const EditorToolbar = () => {
  const styles1 =
    'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSItMjcxIDQxNC45IDUyIDEzIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTIiIGhlaWdodD0iMTMiPjxzdHlsZT4uc3Qxe2ZpbGw6I2ZmZn0uc3Qye2ZpbGw6IzdiN2I3Yn08L3N0eWxlPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTS0yMTkgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiMwMDgyZTIiLz48ZyBpZD0iWE1MSURfMl8iPjxnIGlkPSJYTUxJRF8xOF8iPjxwYXRoIGlkPSJYTUxJRF8zM18iIGNsYXNzPSJzdDEiIGQ9Ik0tMjI1LjUgNDE1LjNjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnoiLz48cGF0aCBpZD0iWE1MSURfOF8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjI1LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi41IDUuNS01LjUgNS41LTUuNS0yLjUtNS41LTUuNSAyLjUtNS41IDUuNS01LjVtMC0xYy0zLjYgMC02LjUgMi45LTYuNSA2LjVzMi45IDYuNSA2LjUgNi41IDYuNS0yLjkgNi41LTYuNS0yLjktNi41LTYuNS02LjV6Ii8+PC9nPjwvZz48ZyBpZD0iWE1MSURfNV8iPjxwYXRoIGlkPSJYTUxJRF8zMV8iIGNsYXNzPSJzdDEiIGQ9Ik0tMjM4IDQyNGwtMi41LTIuNiAxLTEgMS41IDEuNCAzLjUtMy40IDEgMXoiLz48L2c+PHBhdGggaWQ9IlhNTElEXzM4XyIgZD0iTS0yNDUgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiM4YThhOGEiLz48ZyBpZD0iWE1MSURfMzBfIj48ZyBpZD0iWE1MSURfMjNfIj48cGF0aCBpZD0iWE1MSURfMjZfIiBjbGFzcz0ic3QxIiBkPSJNLTI2NC41IDQxNS40YzMuMyAwIDYgMi43IDYgNnMtMi43IDYtNiA2Yy0zLjIgMC02LTIuNy02LTZzMi44LTYgNi02eiIvPjxwYXRoIGlkPSJYTUxJRF8yMl8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjY0LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi40IDUuNS01LjUgNS41Yy0zIDAtNS41LTIuNS01LjUtNS41czIuNS01LjUgNS41LTUuNW0wLTFjLTMuNSAwLTYuNSAyLjktNi41IDYuNXMzIDYuNSA2LjUgNi41YzMuNiAwIDYuNS0yLjkgNi41LTYuNXMtMi45LTYuNS02LjUtNi41eiIvPjwvZz48L2c+PGcgaWQ9IlhNTElEXzI3XyI+PHBhdGggaWQ9IlhNTElEXzI5XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTEzNC45OTkgLTI1Mi40OTcgNDIxLjM3OSkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjUzIDQxNy42aDF2Ny42aC0xeiIvPjxwYXRoIGlkPSJYTUxJRF8zNF8iIHRyYW5zZm9ybT0icm90YXRlKC0xMzQuOTk5IC0yNTIuNDYgNDIxLjQxNCkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjU2LjUgNDIwLjloOC4xdjFoLTguMXoiLz48L2c+PC9zdmc+) 1.625rem top';

  const styles2 =
    'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSItMjcxIDQxNC45IDUyIDEzIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTIiIGhlaWdodD0iMTMiPjxzdHlsZT4uc3Qxe2ZpbGw6I2ZmZn0uc3Qye2ZpbGw6IzdiN2I3Yn08L3N0eWxlPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTS0yMTkgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiMwMDgyZTIiLz48ZyBpZD0iWE1MSURfMl8iPjxnIGlkPSJYTUxJRF8xOF8iPjxwYXRoIGlkPSJYTUxJRF8zM18iIGNsYXNzPSJzdDEiIGQ9Ik0tMjI1LjUgNDE1LjNjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnoiLz48cGF0aCBpZD0iWE1MSURfOF8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjI1LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi41IDUuNS01LjUgNS41LTUuNS0yLjUtNS41LTUuNSAyLjUtNS41IDUuNS01LjVtMC0xYy0zLjYgMC02LjUgMi45LTYuNSA2LjVzMi45IDYuNSA2LjUgNi41IDYuNS0yLjkgNi41LTYuNS0yLjktNi41LTYuNS02LjV6Ii8+PC9nPjwvZz48ZyBpZD0iWE1MSURfNV8iPjxwYXRoIGlkPSJYTUxJRF8zMV8iIGNsYXNzPSJzdDEiIGQ9Ik0tMjM4IDQyNGwtMi41LTIuNiAxLTEgMS41IDEuNCAzLjUtMy40IDEgMXoiLz48L2c+PHBhdGggaWQ9IlhNTElEXzM4XyIgZD0iTS0yNDUgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiM4YThhOGEiLz48ZyBpZD0iWE1MSURfMzBfIj48ZyBpZD0iWE1MSURfMjNfIj48cGF0aCBpZD0iWE1MSURfMjZfIiBjbGFzcz0ic3QxIiBkPSJNLTI2NC41IDQxNS40YzMuMyAwIDYgMi43IDYgNnMtMi43IDYtNiA2Yy0zLjIgMC02LTIuNy02LTZzMi44LTYgNi02eiIvPjxwYXRoIGlkPSJYTUxJRF8yMl8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjY0LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi40IDUuNS01LjUgNS41Yy0zIDAtNS41LTIuNS01LjUtNS41czIuNS01LjUgNS41LTUuNW0wLTFjLTMuNSAwLTYuNSAyLjktNi41IDYuNXMzIDYuNSA2LjUgNi41YzMuNiAwIDYuNS0yLjkgNi41LTYuNXMtMi45LTYuNS02LjUtNi41eiIvPjwvZz48L2c+PGcgaWQ9IlhNTElEXzI3XyI+PHBhdGggaWQ9IlhNTElEXzI5XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTEzNC45OTkgLTI1Mi40OTcgNDIxLjM3OSkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjUzIDQxNy42aDF2Ny42aC0xeiIvPjxwYXRoIGlkPSJYTUxJRF8zNF8iIHRyYW5zZm9ybT0icm90YXRlKC0xMzQuOTk5IC0yNTIuNDYgNDIxLjQxNCkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjU2LjUgNDIwLjloOC4xdjFoLTguMXoiLz48L2c+PC9zdmc+) 0 0';

  const [onOff, setOnOff] = useState('');

  const handelStyleChange = () => {
    onOff === styles2 ? setOnOff(styles1) : setOnOff(styles2);
  };

  return (
    <EditorTolbar>
      <EditorOption>
        <LabelPrevisu>Prévisu </LabelPrevisu>
        <ButtonOnOffS
          type='button'
          style={{ background: onOff }}
          autocomplete='off'
          onClick={() => handelStyleChange()}
        ></ButtonOnOffS>
      </EditorOption>
      <ButtonGroup style={{ height: '28px' }}>
        <First type='button' data-edit='bold' title='Gras'>
          <FirstSpan></FirstSpan>
        </First>
        <Second data-edit='italic' type='button'>
          <SecondSpan></SecondSpan>
        </Second>
        <Third type='button'>
          <ThirdSpan>U</ThirdSpan>
        </Third>
        <Forth type='button'>
          <SpanForth></SpanForth>
        </Forth>
      </ButtonGroup>
      <ButtonGroup style={{ marginLeft: '5px' }}>
        <First type='button'>
          <FirstSpan style={{ backgroundImage: `url(${liste})` }}></FirstSpan>
        </First>
        <Second type='button' style={{ height: '28px', width: '16px' }}>
          <SecondSpan
            style={{
              backgroundImage: `url(${listeN})`,
              padding: '0 6px 1px'
            }}
          ></SecondSpan>
        </Second>
        <Third type='button' style={{ width: '21px' }}>
          <SecondSpan
            style={{
              backgroundImage: `url(${quote})`,
              padding: '0 6px 1px',
              margin: '5px 0 0 6px'
            }}
          ></SecondSpan>
        </Third>
        <Third type='button'>
          <SecondSpan
            style={{
              backgroundImage: `url(${code})`,
              height: '16px',
              margin: '5px 0 0 14px'
            }}
          ></SecondSpan>
        </Third>
        <Forth
          type='button'
          style={{
            width: '24px'
          }}
        >
          <SpanForth
            style={{
              backgroundImage: `url(${spoil})`,
              height: '16px',
              margin: '0 0 0 -4px'
            }}
          ></SpanForth>
        </Forth>
      </ButtonGroup>
      <ButtonGroup>
        <First type='button'>
          <FirstSpan style={{ backgroundImage: `url(${icon})` }}></FirstSpan>
        </First>
        <Forth
          type='button'
          style={{
            width: '24px',
            height: '22px',
            margin: '0 4px 0 6px'
          }}
        >
          <SpanForth
            style={{
              backgroundImage: `url(${bntimg})`,
              height: '21px'
            }}
          ></SpanForth>
        </Forth>
      </ButtonGroup>
      <ButtonGroup style={{ marginLeft: '5px' }}>
        <First
          type='button'
          style={{
            height: '22px',
            padding: '0'
          }}
        >
          <FirstSpan style={{ backgroundImage: `url(${aide})` }}></FirstSpan>
        </First>
      </ButtonGroup>
    </EditorTolbar>
  );
};

const SpanForth = styled.span`
  height: 15px;
  display: inline-block;
  background-image: url(${underline});
  background-repeat: no-repeat;
  width: 21px;
  background-position: center center;
`;

const Forth = styled.button`
  position: relative;
  float: left;
  font-size: 1rem;
  padding-left: 2px;
  border: 0;
  color: #8a8a8a;
  background: transparent;
  border-radius: 0.1875rem;
  height: 1.5rem;
  line-height: 1.8625rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -0.1625rem;
`;

const Third = styled.button`
  border-radius: 0;
  font-size: 1rem;
  padding: 0.0625rem 0.375rem;
  border: 0;
  color: #8a8a8a;
  background: transparent;
  height: 1.5rem;
  line-height: 1.5625rem;
  position: relative;
  float: left;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`;

const ThirdSpan = styled.span`
  speak: none;
  text-decoration: underline;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

const SecondSpan = styled.span`
  height: 15px;
  display: inline-block;
  background-image: url(${italic});
  background-repeat: no-repeat;
  width: 21px;
  background-position: center center;
`;

const Second = styled.button`
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAENSURBVDhPrZM7CsJAEIb/mEKstLFIFVAUhMV0ll7AVm/gsWw9ggfQGywMCIYIqVIIIVaSQnxlcaPuq3C7ZHe/nflmxsvz/IY/rMYfGC+EZ47ogM1qh0z5WoDpcoah2LOAxKlsi/UmxuX52R5jvpig8wV3Si2hYwV5rO4o+oE8/9tBJYHSa0XxQzDWVCZqBRV8j5O42uox9DXVsYAy8PgsrrYxiAJtkc2ghHCUchB9G65hDaASRCkqOz5CxqC2U9H0oIJjL+WA6eSIqLSgjMd42xlE0NsxRpSApByMTHJMEZVEkK3DoGmdjwoqUivApRz0bHIErjZr7gOqaia3odW2odywjogDw9JHrgRx7g5MdlIPrxToIgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  width: 21px;
  background-position: center center;
  padding: 4px 0;
  border: 0;
  color: #8a8a8a;
  background: transparent;
  height: 1.5rem;
  line-height: 1.5625rem;
  border-radius: 0;
  position: relative;
  float: left;
  display: inline-block;
  margin-bottom: 0;
`;

const FirstSpan = styled.span`
  height: 21px;
  display: inline-block;
  background-image: url(${bold});
  background-repeat: no-repeat;
  width: 21px;
`;

const First = styled.button`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-left: 0;
  font-size: 1.15rem;
  padding: 3px 6px 1px;
  width: 28px;
  border: 0;
  color: #8a8a8a;
  background: transparent;
  border-radius: 0.1875rem;
  height: 1.5rem;
  line-height: 1.5625rem;
  position: relative;
  float: left;
  display: inline-block;
  margin-bottom: 0;
`;

const ButtonGroup = styled.div`
  border-radius: 0.1875rem;
  background: #eee;
  border: 0.0625rem solid #ccc;
  margin-bottom: 0.3125rem;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const ButtonOnOffS = styled.button`
  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSItMjcxIDQxNC45IDUyIDEzIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTIiIGhlaWdodD0iMTMiPjxzdHlsZT4uc3Qxe2ZpbGw6I2ZmZn0uc3Qye2ZpbGw6IzdiN2I3Yn08L3N0eWxlPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTS0yMTkgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiMwMDgyZTIiLz48ZyBpZD0iWE1MSURfMl8iPjxnIGlkPSJYTUxJRF8xOF8iPjxwYXRoIGlkPSJYTUxJRF8zM18iIGNsYXNzPSJzdDEiIGQ9Ik0tMjI1LjUgNDE1LjNjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnoiLz48cGF0aCBpZD0iWE1MSURfOF8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjI1LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi41IDUuNS01LjUgNS41LTUuNS0yLjUtNS41LTUuNSAyLjUtNS41IDUuNS01LjVtMC0xYy0zLjYgMC02LjUgMi45LTYuNSA2LjVzMi45IDYuNSA2LjUgNi41IDYuNS0yLjkgNi41LTYuNS0yLjktNi41LTYuNS02LjV6Ii8+PC9nPjwvZz48ZyBpZD0iWE1MSURfNV8iPjxwYXRoIGlkPSJYTUxJRF8zMV8iIGNsYXNzPSJzdDEiIGQ9Ik0tMjM4IDQyNGwtMi41LTIuNiAxLTEgMS41IDEuNCAzLjUtMy40IDEgMXoiLz48L2c+PHBhdGggaWQ9IlhNTElEXzM4XyIgZD0iTS0yNDUgNDIxLjRjMC0yLjktMi01LjItNS01LjVoLTE1LjVjLTMgMC01LjUgMi41LTUuNSA1LjVzMi41IDUuNSA1LjUgNS41aDE1LjVjMy0uMyA1LTIuNiA1LTUuNXoiIGZpbGw9IiM4YThhOGEiLz48ZyBpZD0iWE1MSURfMzBfIj48ZyBpZD0iWE1MSURfMjNfIj48cGF0aCBpZD0iWE1MSURfMjZfIiBjbGFzcz0ic3QxIiBkPSJNLTI2NC41IDQxNS40YzMuMyAwIDYgMi43IDYgNnMtMi43IDYtNiA2Yy0zLjIgMC02LTIuNy02LTZzMi44LTYgNi02eiIvPjxwYXRoIGlkPSJYTUxJRF8yMl8iIGNsYXNzPSJzdDIiIGQ9Ik0tMjY0LjUgNDE1LjljMyAwIDUuNSAyLjUgNS41IDUuNXMtMi40IDUuNS01LjUgNS41Yy0zIDAtNS41LTIuNS01LjUtNS41czIuNS01LjUgNS41LTUuNW0wLTFjLTMuNSAwLTYuNSAyLjktNi41IDYuNXMzIDYuNSA2LjUgNi41YzMuNiAwIDYuNS0yLjkgNi41LTYuNXMtMi45LTYuNS02LjUtNi41eiIvPjwvZz48L2c+PGcgaWQ9IlhNTElEXzI3XyI+PHBhdGggaWQ9IlhNTElEXzI5XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTEzNC45OTkgLTI1Mi40OTcgNDIxLjM3OSkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjUzIDQxNy42aDF2Ny42aC0xeiIvPjxwYXRoIGlkPSJYTUxJRF8zNF8iIHRyYW5zZm9ybT0icm90YXRlKC0xMzQuOTk5IC0yNTIuNDYgNDIxLjQxNCkiIGNsYXNzPSJzdDEiIGQ9Ik0tMjU2LjUgNDIwLjloOC4xdjFoLTguMXoiLz48L2c+PC9zdmc+)
    1.625rem top;
  box-shadow: none;
  width: 1.625rem;
  height: 0.8125rem;
  border: none;
  outline: none;
  vertical-align: middle;
  display: inline-block;
  margin: 0;
  cursor: pointer;
`;

const LabelPrevisu = styled.span`
  color: #656574;
  font-family: robotoboldcondensed, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
  vertical-align: middle;
  padding-right: 0.125rem;
  font-weight: 700;
`;

const EditorOption = styled.div`
  margin: 0.25rem 0 0 0.625rem;
  float: right !important;
`;

const EditorTolbar = styled.div`
  padding: 0 0.3125rem;
  margin-top: 0.3125rem;
`;

export default EditorToolbar;
