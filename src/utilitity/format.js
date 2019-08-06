/* eslint-disable import/prefer-default-export */
export const formatInvolvment = roles =>
  roles.map(role => role.involvment.document[0].data.involvment.text)

export const formatAboutGroup = aboutGroup =>
  aboutGroup.map(g => {
    const rows = g.rows1.document[0].data.group.map(r => ({
      name: r.row.document[0].data.name.text,
      value: r.row.document[0].data.value.text,
    }))

    return { title: g.group_title.text, rows }
  })
