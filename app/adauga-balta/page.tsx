import { CreateLakeForm } from "@/components/CreateLakeForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { db } from "@/lib/db";
import React from "react";

const AdaugaBaltaPage = async() => {

  const lakes = await db.lake.findMany()

  console.log(lakes)
    return (
    <div className="mt-32 container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Adaugă baltă</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CreateLakeForm />

    </div>
  );
};

export default AdaugaBaltaPage;
