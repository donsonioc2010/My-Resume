import { Badge } from 'react-bootstrap';

// 기술쪽 배열이면서, 원소가 문자열이 아니면 실행안함
export default function CreateExperienceSkill(props) {
  var info = props.info;

  if (!info.skills || !Array.isArray(info.skills)) {
    return '';
  }

  return (
    <li>
      <b>Experience Skills</b>
      <div>
        {info.skills.map((keyword, idx) => {
          if (typeof keyword !== 'string') {
            return null;
          }
          return (
            <>
              <Badge
                bg={'secondary'}
                style={{ fontWeight: 400, marginRight: 2 }}
                className="mr-1"
                key={info.name + '_skills_' + idx.toString()}
              >
                {keyword}
              </Badge>
            </>
          );
        })}
      </div>
    </li>
  );
}
