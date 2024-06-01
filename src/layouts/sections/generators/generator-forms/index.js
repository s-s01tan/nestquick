/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Forms page components
import ControllerGenerator from "layouts/sections/input-areas/forms/generators/Controller";

// Forms page components code
import formSimpleCode from "layouts/sections/input-areas/forms/generators/Controller/code";

function Forms({ ...props }) {
  const { value, breadcrumb } = props;

  return (
    <BaseLayout title={value} breadcrumb={breadcrumb}>
      <View title="Generator" code={formSimpleCode}>
        <ControllerGenerator />
      </View>
    </BaseLayout>
  );
}

export default Forms;
