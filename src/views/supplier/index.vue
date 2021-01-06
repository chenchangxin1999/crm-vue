<template>
  <div class="entity-box">
    <!--操作的部分-->
    <div class="execute-box">
      <el-button-group>
        <el-button type="danger" size="mimi">新建</el-button>
        <el-button type="danger" size="mimi">删除</el-button>
      </el-button-group>
    </div>
    <!--搜索使用到的-->
    <div class="search-box">

    </div>
    <div class="table-box">
      <el-table
          tooltip-effect="dark"
          border
          stripe
          :data="tableData"
          style="width: 100%">
        <el-table-column
            align="center"
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            show-overflow-tooltip
            prop="address"
            label="地址">
        </el-table-column>
        <el-table-column
            align="center"
            label="操作">
          <template>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="page-box"
          page-size="5"
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
    <div class="page-box">

    </div>

  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less" src="./index.less"></style>