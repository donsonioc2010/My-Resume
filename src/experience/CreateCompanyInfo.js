export default function CreateCompanyInfo(props) {
  var companyInfo = props.info;

  return (
    <div key={companyInfo.name} style={{ color: 'green' }}>
      <h4>{companyInfo.getDateJoinToResign()}</h4>
      {companyInfo.isResignBadge()}&nbsp;
      {companyInfo.getDurationYearAndMonth()} <br />
    </div>
  );
}
