import { Style } from './Style';
/**
 * title의 text를 기록하며, title이 없는 경우에는 url를 삽입한다.
 * url값은 필수
 * @param {*} props.url
 * @param {*} props.title
 */

export function HrefTargetBlank(props) {
  var url = props.url;
  var title = props.title;

  var style = {
    color: 'blue',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <a href={url} style={style} target="_blank" rel="noreferrer noopener">
      {props.title || props.url}
    </a>
  );
}

export function StyleBlueTitleByH1AndHr(props) {
  var title = props.title;

  return (
    <div style={Style.blue}>
      <h1>{title}</h1>
      <hr />
    </div>
  );
}
