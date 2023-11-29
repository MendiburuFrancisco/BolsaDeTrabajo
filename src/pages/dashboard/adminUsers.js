import React from "react";
import Layout from "../../layouts/AdminDashboard";
import AdminUsers from "../../components/ui/dashboard/dashboardUsers";

const AdminUser = () => {
  return (
    <Layout >
        <AdminUsers />
    </Layout>
  );
};

export default AdminUser;