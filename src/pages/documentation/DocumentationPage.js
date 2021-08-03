import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function DocumentationPage() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "0 0" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "0 0", height: "100%", width: "100%" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="JavaScript"
                icon={<UserOutlined />}
                title="JavaScript"
              >
                <Menu.Item key="1">Installation</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="Python" icon={<LaptopOutlined />} title="Python">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="Java" icon={<NotificationOutlined />} title="Java">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{ padding: "0 24px", height: "100%", overflow: "scroll" }}
          >
            In the runup to independence elections, Obote formed a coalition
            with the Buganda royalist party, Kabaka Yekka. The two parties
            controlled a Parliamentary majority and Obote became Prime Minister
            in 1962. He assumed the post on 25 April 1962, appointed by Sir
            Walter Coutts, then Governor-General of Uganda. The following year
            the position of Governor-General was replaced by a ceremonial
            presidency to be elected by the parliament. Mutesa, the Kabaka
            (King) of Buganda, became the ceremonial President, with Obote as
            executive prime minister.[5] From left to right: Grace Ibingira,
            Obote, and John Kakonge in 1962 In January 1964, a mutiny occurred
            at the military barracks at Jinja, Uganda's second city and home to
            the 1st Battalion of the Uganda Army. There were similar mutinies in
            two other eastern African states; all three countries requested the
            support of troops from the British military. Before they arrived,
            however, Obote sent his defence minister Felix Onama to negotiate
            with the mutineers. Onama was held hostage, and agreed to many
            demands, including significant pay increases for the army, and the
            rapid promotion of many officers, including the future president Idi
            Amin.[5] In 1965, Kenyans had been barred from leadership positions
            within the government, and this was followed by the removal of
            Kenyans en masse from Uganda in 1969, under Obote's guidance.[9] As
            prime minister, Obote was implicated in a gold smuggling plot,
            together with Idi Amin, then deputy commander of the Ugandan armed
            forces. When the Parliament demanded an investigation of Obote and
            the ousting of Amin, he suspended the constitution and declared
            himself President in March 1966, allocating to himself almost
            unlimited power under state of emergency rulings. Several members of
            his cabinet, who were leaders of rival factions in the party, were
            arrested and detained without charge. Obote responded with an armed
            attack upon Mutesa's palace, which ended with Mutesa fleeing to
            exile.[10] In 1967, Obote's power was cemented when the parliament
            passed a new constitution that abolished the federal structure of
            the independence constitution and created an executive
            presidency.[11]In the runup to independence elections, Obote formed
            a coalition with the Buganda royalist party, Kabaka Yekka. The two
            parties controlled a Parliamentary majority and Obote became Prime
            Minister in 1962. He assumed the post on 25 April 1962, appointed by
            Sir Walter Coutts, then Governor-General of Uganda. The following
            year the position of Governor-General was replaced by a ceremonial
            presidency to be elected by the parliament. Mutesa, the Kabaka
            (King) of Buganda, became the ceremonial President, with Obote as
            executive prime minister.[5] From left to right: Grace Ibingira,
            Obote, and John Kakonge in 1962 In January 1964, a mutiny occurred
            at the military barracks at Jinja, Uganda's second city and home to
            the 1st Battalion of the Uganda Army. There were similar mutinies in
            two other eastern African states; all three countries requested the
            support of troops from the British military. Before they arrived,
            however, Obote sent his defence minister Felix Onama to negotiate
            with the mutineers. Onama was held hostage, and agreed to many
            demands, including significant pay increases for the army, and the
            rapid promotion of many officers, including the future president Idi
            Amin.[5] In 1965, Kenyans had been barred from leadership positions
            within the government, and this was followed by the removal of
            Kenyans en masse from Uganda in 1969, under Obote's guidance.[9] As
            prime minister, Obote was implicated in a gold smuggling plot,
            together with Idi Amin, then deputy commander of the Ugandan armed
            forces. When the Parliament demanded an investigation of Obote and
            the ousting of Amin, he suspended the constitution and declared
            himself President in March 1966, allocating to himself almost
            unlimited power under state of emergency rulings. Several members of
            his cabinet, who were leaders of rival factions in the party, were
            arrested and detained without charge. Obote responded with an armed
            attack upon Mutesa's palace, which ended with Mutesa fleeing to
            exile.[10] In 1967, Obote's power was cemented when the parliament
            passed a new constitution that abolished the federal structure of
            the independence constitution and created an executive
            presidency.[11]In the runup to independence elections, Obote formed
            a coalition with the Buganda royalist party, Kabaka Yekka. The two
            parties controlled a Parliamentary majority and Obote became Prime
            Minister in 1962. He assumed the post on 25 April 1962, appointed by
            Sir Walter Coutts, then Governor-General of Uganda. The following
            year the position of Governor-General was replaced by a ceremonial
            presidency to be elected by the parliament. Mutesa, the Kabaka
            (King) of Buganda, became the ceremonial President, with Obote as
            executive prime minister.[5] From left to right: Grace Ibingira,
            Obote, and John Kakonge in 1962 In January 1964, a mutiny occurred
            at the military barracks at Jinja, Uganda's second city and home to
            the 1st Battalion of the Uganda Army. There were similar mutinies in
            two other eastern African states; all three countries requested the
            support of troops from the British military. Before they arrived,
            however, Obote sent his defence minister Felix Onama to negotiate
            with the mutineers. Onama was held hostage, and agreed to many
            demands, including significant pay increases for the army, and the
            rapid promotion of many officers, including the future president Idi
            Amin.[5] In 1965, Kenyans had been barred from leadership positions
            within the government, and this was followed by the removal of
            Kenyans en masse from Uganda in 1969, under Obote's guidance.[9] As
            prime minister, Obote was implicated in a gold smuggling plot,
            together with Idi Amin, then deputy commander of the Ugandan armed
            forces. When the Parliament demanded an investigation of Obote and
            the ousting of Amin, he suspended the constitution and declared
            himself President in March 1966, allocating to himself almost
            unlimited power under state of emergency rulings. Several members of
            his cabinet, who were leaders of rival factions in the party, were
            arrested and detained without charge. Obote responded with an armed
            attack upon Mutesa's palace, which ended with Mutesa fleeing to
            exile.[10] In 1967, Obote's power was cemented when the parliament
            passed a new constitution that abolished the federal structure of
            the independence constitution and created an executive
            presidency.[11]
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
