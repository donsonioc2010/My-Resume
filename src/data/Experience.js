export default function data() {
  return {
    experience: [
      {
        companyName: '엠닥터(M-Doctor)',
        companyJoinDate: '2023-02',
        companyJob: 'Developer',
        companyPosition: '사원',
        skills: [
          'Java',
          'Spring Boot',
          'Intellij',
          'AWS',
          'Maria',
          'H2',
          'Git',
          'Jenkins',
          'nginx',
        ],
        projects: [
          '사내 개발서버 구축',
          [
            'Jenkins를 활용한 개발서버 CI / CD 구축',
            '기존 도메인의 A레코드를 활용하여 개발서버 도메인 추가 및 관리',
          ],
          'Database관리',
          [
            '운영 DB의 경우 Proxy서버와 Was서버만 접근이 가능하도록 AWS VPC를 통한 관리',
            '개발 DB의 경우 DB설정을 통해 계정에 접속한 IP별로 DB에서 사용가능한 기능의 제한을 두는 방식으로 관리',
            'DB의 스키마에 대해서는 오픈소스인 DBDocs를 통하여 문서화해 총괄 관리',
          ],
          'Project 관리',
          [
            'README를 통하여 프로젝트의 이력 관리',
            'Git Organization 관리',
            [
              'Git Branch의 용도 구분 및 PR을 통한 Merge만 가능하도록 Rule 관리',
              'PR, Issue의 Convention관리',
            ],
            '프로젝트의 Refcatoring 진행',
            ['하드코딩 내역에 대하여 설정파일로 추출 및 실행 환경에 따른 사용 설정파일 분류'],
          ],
        ],
      },
      {
        companyName: '㈜비즈웰(Bizwell)',
        companyJoinDate: '2021-04',
        companyResignDate: '2022-06',
        companyJob: 'Java Developer',
        companyPosition: '사원',
        skills: [
          'Java',
          'JSP',
          'Eclipse',
          'Linux',
          'Window Server',
          'Tomcat',
          'Resin',
          'Scouter',
          'Oracle',
          'MySQL',
          'MS-SQL',
          'SVN',
        ],
        projects: [
          '담당 고객사에 납품된 전자결재 및 메신저 어플리케이션 시스템 개선 업무',
          [
            '오류로그파일 1일 600MB가 생성되는 문제 오류개선 이후 일 5MB로 감소',
            '고객사 배정 이후 배정시점 1일 약 10-20건의 요청건수 퇴직전 6건 이하로 감소',
          ],
        ],
      },
    ],
  };
}
