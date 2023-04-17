import CompanyInfo from './CompanyInfo';

export default function CreateCompanyInfo(props) {
  var companyInfo = props.info;

  return (
    <div key={companyInfo.name} style={{ color: 'green' }}>
      <h4>{companyInfo.name}</h4>
      {companyInfo.team}
      <br />
      {companyInfo.getJobAndPosition()} <br />
      {companyInfo.getDurationYearAndMonth()} <br />
      {companyInfo.getDateJoinToResign()}
    </div>
  );
}
